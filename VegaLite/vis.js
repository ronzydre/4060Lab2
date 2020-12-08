var vis = {
    $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
    description: 'Vis 1',
    data: {
        url: 'https://raw.githubusercontent.com/ronzydre/4060Lab2/master/gapminder.csv'
    },
    mark: 'line',
    encoding: {
        x: {
            field: 'region',
            type: 'nominal'
        },
        y: {
            field: 'population',
            type: 'quantitative'
        }
    }
};
vegaEmbed('#vis1', vis);