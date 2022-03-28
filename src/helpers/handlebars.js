const handlebars = require('handlebars');


module.exports = {
    sum: (a, b) => a + b,
    sortable: (filed,sort) =>{
        const sortType = filed === sort.column ? sort.type : 'default'
        const icons = {
            default:'oi oi-elevator',
            asc: 'oi oi-sort-ascending',
            desc: 'oi oi-sort-descending'
        }

        const types ={
            default:'asc',
            asc:'desc',
            desc:'asc'
        }

        const address = handlebars.escapeExpression(`?_sort&column=${filed}&type=${types[sortType ||"default"]}`)

        const result =  `<a href="${address}">
        <span class="${icons[sortType]}"></span>
        </a>`

        return new handlebars.SafeString(result)
    }
}