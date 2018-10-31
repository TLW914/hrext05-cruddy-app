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
// var chart = c3.generate({
//     bindto: '#chart',
//     data: {
//         columns: data[1],
//         type: 'line',
//         types: {
//             data[1][0]: 'line',
//         },

//     },

// });