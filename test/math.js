import { expect } from 'chai';
import { multiply, abs, isNumber } from '../lib/index';
//import { multiply, abs, isNumber } from '~/math';

describe('multiply', () => {
    it('supports zero', () => {
        expect(multiply(0, 0)).to.equal(0);
        expect(multiply(1, 0)).to.equal(0);
        expect(multiply(0, 1)).to.equal(0);
    });
    it('supports positive numbers', () => {
        expect(multiply(1, 2)).to.equal(2);
        expect(multiply(5, 5)).to.equal(25);
        expect(multiply(1, 10000000000000)).to.equal(10000000000000);
    });
    it('supports negative numbers', () => {
        expect(multiply(1, -2)).to.equal(-2);
        expect(multiply(5, -5)).to.equal(-25);
        expect(multiply(-1, 10000000000000)).to.equal(-10000000000000);
        expect(multiply(-1, -2)).to.equal(2);
        expect(multiply(-5, -5)).to.equal(25);
        expect(multiply(-1, -10000000000000)).to.equal(10000000000000);
    });
});

describe('abs', () => {
    it('supports zero', () => {
        expect(abs(0)).to.equal(0);
    });
    it('supports positive numbers', () => {
        expect(abs(10)).to.equal(10);
    });
    it('supports negative numbers', () => {
        expect(abs(-10)).to.equal(10);
    });
});

describe('isNumber', () => {
    it('supports zero', () => {
        expect(isNumber(0)).to.be.true;
    });
    it('supports positive numbers', () => {
        expect(isNumber(1)).to.be.true;
    });
    it('supports negative numbers', () => {
        expect(isNumber(-1)).to.be.true;
    });
    it('supports strings', () => {
        expect(isNumber('blah')).to.be.false;
    });
    it('supports undefined', () => {
        expect(isNumber()).to.be.false;
    });
    it('supports null', () => {
        expect(isNumber(null)).to.be.false;
    });
});
