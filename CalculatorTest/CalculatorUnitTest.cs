using System;
using Calculator;
using NUnit.Framework;

namespace CalculatorTest
{
    public class CalculatorUnitTest
    {
        [Test]
        public void 傳入1和2得到結果3()
        {
            var calc = new CalculatorClass();
            var a = 1;
            var b = 2;
            var expect = 3;

            var result = calc.Add(a, b);

            Assert.AreEqual(expect, result);
        }
        [Test]
        public void 傳入兩個浮點數()
        {
            var calc = new CalculatorClass();
            var a = 50.1;
            var b = 70.1;
            var expect = 120.2;

            var result1 = Math.Round(calc.Add1(a, b));

            Assert.AreEqual(expect, result1);
        }
    }
}
