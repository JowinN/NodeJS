const mocha = require('mocha');
const chai = require('chai');
const fares = require('../Testing/fares.cjs');

const { describe, it } = mocha;
const { expect } = chai;

describe("Fares Module Tests", () => {

    describe("Rate Property", () => {
        it("should have a 'rate' property", () => {
            expect(fares).to.have.property('rate');
        });

        it("'rate' should be an object", () => {
            expect(fares.rate).to.be.an('object');
        });

        it("'rate' should contain valid keys", () => {
            const expectedKeys = ["fixed", "minkm", "perkm", "freemin", "permin"];
            expectedKeys.forEach(key => {
                expect(fares.rate).to.have.property(key).that.is.a('number');
            });
        });
    });

    describe("calcFare Function", () => {
        it("should have a 'calcFare' function", () => {
            expect(fares).to.have.property('calcFare').that.is.a('function');
        });

        it("should calculate the correct fare for valid inputs", () => {
            const km = 10; // Distance in km
            const min = 20; // Time in minutes
            let expectedFare = fares.rate.fixed;

            if (km > fares.rate.minkm) {
                expectedFare += (km - fares.rate.minkm) * fares.rate.perkm;
            }
            if (min > fares.rate.freemin) {
                expectedFare += (min - fares.rate.freemin) * fares.rate.permin;
            }

            const calculatedFare = fares.calcFare(km, min);
            expect(calculatedFare).to.equal(expectedFare);
        });

        it("should return only the fixed fare for 0 km and 0 min", () => {
            const calculatedFare = fares.calcFare(0, 0);
            expect(calculatedFare).to.equal(fares.rate.fixed);
        });

        it("should handle edge cases correctly", () => {
            // Case: Distance exactly at the minimum
            expect(fares.calcFare(fares.rate.minkm, fares.rate.freemin)).to.equal(fares.rate.fixed);

            // Case: Distance just above the minimum
            expect(fares.calcFare(fares.rate.minkm + 1, fares.rate.freemin)).to.equal(fares.rate.fixed + fares.rate.perkm);

            // Case: Time just above the free minutes
            expect(fares.calcFare(fares.rate.minkm, fares.rate.freemin + 1)).to.equal(fares.rate.fixed + fares.rate.permin);
        });

        it("should throw an error for invalid inputs", () => {
            expect(() => fares.calcFare(-1, 10)).to.throw();
            expect(() => fares.calcFare(10, -1)).to.throw();
            expect(() => fares.calcFare("10", "15")).to.throw();
        });
    });

});
