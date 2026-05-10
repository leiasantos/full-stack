import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("courses").insert([
        { name: "HTML e CSS" },
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "React" },
        { name: "Node.js" },
        { name: "Git e GitHub" },
        { name: "Banco de Dados SQL" },
        { name: "APIs REST" },
        { name: "Java" },
        { name: "Testes Automatizados" }
    ]);
};
