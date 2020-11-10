import { test } from 'uvu';
import * as assert from 'uvu/assert';
import { toASTNode } from "./astify";

test('astify', () => {
	assert.is(toASTNode('hi').type, 'StringLiteral');
});

test.run();
