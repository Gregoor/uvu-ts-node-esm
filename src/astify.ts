import t from '@babel/types';

export function toASTNode(value: string| number): t.Node {
    return typeof value == 'string'
        ? t.stringLiteral(value)
        : t.numericLiteral(value)
}

console.log(toASTNode(23));

