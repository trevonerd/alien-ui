import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';

const NODE_ENV = process.env.NODE_ENV || 'development';
const outputFile =
    NODE_ENV === 'production' ? './lib/components.prod.js' : './lib/components.dev.js';

export default {
    input: './src/components/index.js',
    output: {
        file: outputFile,
        format: 'umd',
        name: 'trevo-ui'
    },
    plugins: [
        replace({
            'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
        }),
        babel({
            exclude: 'node_modules/**'
        }),
        resolve(),
        commonjs({
            include: 'node_modules/**',
            namedExports: {
                'node_modules/react/index.js': [
                    'Component',
                    'PureComponent',
                    'Fragment',
                    'Children',
                    'createElement'
                ]
            }
        })
    ],
    external: ['styled-components', 'react', 'reactDom']
};
