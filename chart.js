var chart = c3.generate({
   bindto: '#chart',
    data: {
        x : 'x',
        columns: data,
        groups: [
            ['download', 'loading']
        ],
        type: 'bar'
    },
    axis: {
        x: {
            type: 'category' // this needed to load string x value
        }
    }
});