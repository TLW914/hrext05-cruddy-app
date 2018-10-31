var chart = c3.generate({
   bindto: '#chart',
    data: {
        x : 'x',
        columns: data,
        groups: [

        ],
        type: 'bar'
    },

    axis: {
        x: {
            type: 'category' // this needed to load string x value
        }
    }
});