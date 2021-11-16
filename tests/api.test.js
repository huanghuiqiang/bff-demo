
const request = require('supertest');
const express = require('express');
const expect = require('chai').expect;

const app = express();

var assert = require('assert');
// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal([1, 2, 3].indexOf(4), -1);
//     });
//   });
// });



describe('nodejs api test', function() {
    it('获取图书列表接口测试', function() {
        request('http://localhost:3000').get('/api/getDataList').expect(200).end((err, res) => {
        console.log('res', res.body);
        expect(res.body.length).equal(2);
    })
    });
  });
