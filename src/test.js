import { test } from 'node:test'
import * as assert from 'node:assert'
import normalize from '.'

void test('normalize', () => {
  assert.equal(normalize('./fixtures///b/../b/c.js'), 'fixtures/b/c.js')
  assert.equal(normalize('/foo/../../../bar'), '/bar')
  assert.equal(normalize('a//b//../b'), 'a/b')
  assert.equal(normalize('a//b//./c'), 'a/b/c')
  assert.equal(normalize('a//b//.'), 'a/b')
  assert.equal(normalize('/a/b/c/../../../x/y/z'), '/x/y/z')
  assert.equal(normalize('///..//./foo/.//bar'), '/foo/bar')
  assert.equal(normalize('bar/foo../../'), 'bar/')
  assert.equal(normalize('bar/foo../..'), 'bar')
  assert.equal(normalize('bar/foo../../baz'), 'bar/baz')
  assert.equal(normalize('bar/foo../'), 'bar/foo../')
  assert.equal(normalize('bar/foo..'), 'bar/foo..')
  assert.equal(normalize('../foo../../../bar'), '../../bar')
  assert.equal(normalize('../../.././../../../bar'), '../../../../../../bar')
  assert.equal(normalize('../../../foo/../../../bar'), '../../../../../bar')
  assert.equal(normalize('../../../foo/../../../bar/../../'), '../../../../../../')
  assert.equal(normalize('../foobar/barfoo/foo/../../../bar/../../'), '../../')
  assert.equal(
    normalize('../../../foobar/../../../bar/../../baz'),
    '../../../../../../baz'
  )
  assert.equal(normalize('/../../../foobar/../../../bar/../../baz'), '/baz')
  assert.throws(() => normalize(1), /Expected a string, got a number/)
})
