import {sql} from './db.js'


sql`
    CREATE TABLE cleintes(
        id CHARACTER VARYING(50) PRIMARY KEY,
        nome CHARACTER VARYING(50) NOT NULL,
        email CHARACTER VARYING(100) NOT NULL,
        contato CHARACTER VARYING(15) NOT NULL
    )
`
.then(() => {
    console.log('tabela criada')
})