module.exports = {

"[externals]/ [external] (next/dist/compiled/next-server/app-route.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/compiled/next-server/app-route.runtime.dev.js");

module.exports = mod;
}}),
"[externals]/ [external] (@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("@opentelemetry/api");

module.exports = mod;
}}),
"[externals]/ [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/compiled/next-server/app-page.runtime.dev.js");

module.exports = mod;
}}),
"[externals]/ [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/server/app-render/work-unit-async-storage.external.js");

module.exports = mod;
}}),
"[externals]/ [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/server/app-render/work-async-storage.external.js");

module.exports = mod;
}}),
"[externals]/ [external] (bcrypt, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("bcrypt");

module.exports = mod;
}}),
"[project]/app/lib/db.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__),
    "query": (()=>query)
});
(()=>{
    const e = new Error("Cannot find module 'pg'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
const db = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});
async function query(queryText, params) {
    const client = await pool.connect();
    try {
        const res = await client.query(queryText, params);
        return res;
    } finally{
        client.release();
    }
}
const __TURBOPACK__default__export__ = db;
 // import { PrismaClient } from '@prisma/client'
 // export const db = new PrismaClient() // Creating a new instance of PrismaClient
 /* import mysql from 'mysql2/promise'



const pool = mysql.createPool({
  connectionLimit: 40,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Export a helper function to execute database queries
export async function query(sql, values) {
  return new Promise((resolve, reject) => {
    pool.query(sql, values, (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve([results]);
    });
  });
}

export default pool;
 */ }}),
"[project]/app/lib/placeholder-data.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
__turbopack_esm__({
    "customers": (()=>customers),
    "invoices": (()=>invoices),
    "revenue": (()=>revenue),
    "users": (()=>users)
});
const users = [
    {
        id: '410544b2-4001-4271-9855-fec4b6a6442a',
        name: 'User',
        email: 'user@nextmail.com',
        password: '123456'
    }
];
const customers = [
    {
        id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
        name: 'Evil Rabbit',
        email: 'evil@rabbit.com',
        image_url: '/customers/evil-rabbit.png'
    },
    {
        id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
        name: 'Delba de Oliveira',
        email: 'delba@oliveira.com',
        image_url: '/customers/delba-de-oliveira.png'
    },
    {
        id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
        name: 'Lee Robinson',
        email: 'lee@robinson.com',
        image_url: '/customers/lee-robinson.png'
    },
    {
        id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
        name: 'Michael Novotny',
        email: 'michael@novotny.com',
        image_url: '/customers/michael-novotny.png'
    },
    {
        id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
        name: 'Amy Burns',
        email: 'amy@burns.com',
        image_url: '/customers/amy-burns.png'
    },
    {
        id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
        name: 'Balazs Orban',
        email: 'balazs@orban.com',
        image_url: '/customers/balazs-orban.png'
    }
];
const invoices = [
    {
        customer_id: customers[0].id,
        amount: 15795,
        status: 'pending',
        date: '2022-12-06'
    },
    {
        customer_id: customers[1].id,
        amount: 20348,
        status: 'pending',
        date: '2022-11-14'
    },
    {
        customer_id: customers[4].id,
        amount: 3040,
        status: 'paid',
        date: '2022-10-29'
    },
    {
        customer_id: customers[3].id,
        amount: 44800,
        status: 'paid',
        date: '2023-09-10'
    },
    {
        customer_id: customers[5].id,
        amount: 34577,
        status: 'pending',
        date: '2023-08-05'
    },
    {
        customer_id: customers[2].id,
        amount: 54246,
        status: 'pending',
        date: '2023-07-16'
    },
    {
        customer_id: customers[0].id,
        amount: 666,
        status: 'pending',
        date: '2023-06-27'
    },
    {
        customer_id: customers[3].id,
        amount: 32545,
        status: 'paid',
        date: '2023-06-09'
    },
    {
        customer_id: customers[4].id,
        amount: 1250,
        status: 'paid',
        date: '2023-06-17'
    },
    {
        customer_id: customers[5].id,
        amount: 8546,
        status: 'paid',
        date: '2023-06-07'
    },
    {
        customer_id: customers[1].id,
        amount: 500,
        status: 'paid',
        date: '2023-08-19'
    },
    {
        customer_id: customers[5].id,
        amount: 8945,
        status: 'paid',
        date: '2023-06-03'
    },
    {
        customer_id: customers[2].id,
        amount: 1000,
        status: 'paid',
        date: '2022-06-05'
    }
];
const revenue = [
    {
        month: 'Jan',
        revenue: 2000
    },
    {
        month: 'Feb',
        revenue: 1800
    },
    {
        month: 'Mar',
        revenue: 2200
    },
    {
        month: 'Apr',
        revenue: 2500
    },
    {
        month: 'May',
        revenue: 2300
    },
    {
        month: 'Jun',
        revenue: 3200
    },
    {
        month: 'Jul',
        revenue: 3500
    },
    {
        month: 'Aug',
        revenue: 3700
    },
    {
        month: 'Sep',
        revenue: 2500
    },
    {
        month: 'Oct',
        revenue: 2800
    },
    {
        month: 'Nov',
        revenue: 3000
    },
    {
        month: 'Dec',
        revenue: 4800
    }
];
;
}}),
"[project]/app/seed/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, a: __turbopack_async_module__, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_esm__({
    "GET": (()=>GET)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$bcrypt$2c$__cjs$29$__ = __turbopack_import__("[externals]/ [external] (bcrypt, cjs)");
//import { db } from '@vercel/postgres';
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/lib/db.js [app-route] (ecmascript)");
/*
import { query } from './lib/db';

export default async function handler(req, res) {
    const { rows } = await query('SELECT * FROM your_table_name', []);
    res.status(200).json(rows);
} */ var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$placeholder$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/lib/placeholder-data.ts [app-route] (ecmascript)");
;
;
;
const client = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].connect();
async function seedUsers() {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;
    const insertedUsers = await Promise.all(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$placeholder$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["users"].map(async (user)=>{
        const hashedPassword = await __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$bcrypt$2c$__cjs$29$__["default"].hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
    }));
    return insertedUsers;
}
async function seedInvoices() {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
    CREATE TABLE IF NOT EXISTS invoices (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      customer_id UUID NOT NULL,
      amount INT NOT NULL,
      status VARCHAR(255) NOT NULL,
      date DATE NOT NULL
    );
  `;
    const insertedInvoices = await Promise.all(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$placeholder$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["invoices"].map((invoice)=>client.sql`
        INSERT INTO invoices (customer_id, amount, status, date)
        VALUES (${invoice.customer_id}, ${invoice.amount}, ${invoice.status}, ${invoice.date})
        ON CONFLICT (id) DO NOTHING;
      `));
    return insertedInvoices;
}
async function seedCustomers() {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
    CREATE TABLE IF NOT EXISTS customers (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      image_url VARCHAR(255) NOT NULL
    );
  `;
    const insertedCustomers = await Promise.all(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$placeholder$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["customers"].map((customer)=>client.sql`
        INSERT INTO customers (id, name, email, image_url)
        VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${customer.image_url})
        ON CONFLICT (id) DO NOTHING;
      `));
    return insertedCustomers;
}
async function seedRevenue() {
    await client.sql`
    CREATE TABLE IF NOT EXISTS revenue (
      month VARCHAR(4) NOT NULL UNIQUE,
      revenue INT NOT NULL
    );
  `;
    const insertedRevenue = await Promise.all(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$placeholder$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revenue"].map((rev)=>client.sql`
        INSERT INTO revenue (month, revenue)
        VALUES (${rev.month}, ${rev.revenue})
        ON CONFLICT (month) DO NOTHING;
      `));
    return insertedRevenue;
}
async function GET() {
    /* return Response.json({
    message:
      'Uncomment this file and remove this line. You can delete this file when you are finished.',
  }); */ try {
        await client.sql`BEGIN`;
        await seedUsers();
        await seedCustomers();
        await seedInvoices();
        await seedRevenue();
        await client.sql`COMMIT`;
        return Response.json({
            message: 'Database seeded successfully'
        });
    } catch (error) {
        await client.sql`ROLLBACK`;
        return Response.json({
            error
        }, {
            status: 500
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/ (server-utils)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__789849._.js.map