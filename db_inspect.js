const mysql = require('mysql2/promise');

async function inspect() {
    console.log('--- DB Server Inspection (34.22.98.158) ---');
    try {
        const connection = await mysql.createConnection({
            host: '34.22.98.158',
            user: 'root',
            password: 'tkdlektkfkd12!',
            port: 3306,
            connectTimeout: 15000
        });

        console.log('✅ Connection Successful!');

        const [databases] = await connection.query('SHOW DATABASES');
        const systemDBs = ['information_schema', 'mysql', 'performance_schema', 'sys'];

        for (const db of databases) {
            const dbName = db.Database;
            if (systemDBs.includes(dbName)) continue;

            console.log(`\n📂 Database: ${dbName}`);
            
            await connection.query(`USE ${dbName}`);
            const [tables] = await connection.query('SHOW TABLES');

            if (tables.length === 0) {
                console.log('  (No tables found)');
                continue;
            }

            for (const table of tables) {
                const tableName = Object.values(table)[0];
                console.log(`  - Table: ${tableName}`);
                
                const [columns] = await connection.query(`DESCRIBE ${tableName}`);
                columns.forEach(col => {
                    console.log(`    * ${col.Field} (${col.Type}) ${col.Key === 'PRI' ? '[PK]' : ''}`);
                });

                // Get row count
                const [count] = await connection.query(`SELECT COUNT(*) as count FROM ${tableName}`);
                console.log(`    (Rows: ${count[0].count})`);
            }
        }

        await connection.end();
        console.log('\n--- Inspection Finished ---');
    } catch (error) {
        console.error('❌ Connection Failed:', error.message);
        if (error.message.includes('ETIMEDOUT')) {
            console.log('💡 Tip: Please check if GCP Firewall allows port 3306 for my access.');
        }
    }
}

inspect();
