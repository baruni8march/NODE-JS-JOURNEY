const pool=require("../database");

async function getalltodoservice(completed,search,limit){
    let query="SELECT * FROM todos";
    const values=[];
    const conditions=[];

    if(completed!==undefined){
        values.push(completed);
        conditions.push(`completed=$${values.length}`);
    }

    if(search!==undefined){
        values.push(`%${search}%`);
        conditions.push(`title ILIKE $${values.length}`);
    }

    if(conditions.length>0){
        query=query+" WHERE "+conditions.join(" AND ");
    }

    query=query+" ORDER BY id ASC";

    if(limit!==undefined){
        values.push(limit);
        query=query+` LIMIT $${values.length}`;
    }

    const result=await pool.query(query,values);
    return result.rows;
}

async function createtodoservice(title){
    const result=await pool.query(
        "INSERT INTO todos (title,completed) VALUES($1,$2) RETURNING *",
        [title,false]
    );
    return result.rows[0];
}

async function gettodobyidservice(id){
    const result=await pool.query(
        "SELECT * FROM todos WHERE id=$1",
        [id]
    );
    return result.rows[0];
}

async function updatetodoservice(id,title,completed){
    const result=await pool.query(
        "UPDATE todos SET title=$1, completed=$2 WHERE id=$3 RETURNING *",
        [title,completed,id]
    );
    return result.rows[0];
}

async function deletetodoservice(id){
    const result=await pool.query(
        "DELETE FROM todos WHERE id=$1 RETURNING *",
        [id]
    );
    return result.rows[0];
}

module.exports={
    getalltodoservice,
    createtodoservice,
    gettodobyidservice,
    updatetodoservice,
    deletetodoservice
};