using System;
using System.Linq;
using NUnit.Framework;

namespace _10_Tribonacci_Sequence
{
    public class XbonacciTest
    {
        private Xbonacci variabonacci;

        [SetUp]
        public void SetUp()
        {
            variabonacci = new Xbonacci();
        }

        [TearDown]
        public void TearDown()
        {
            variabonacci = null;
        }

        [Test]
        public void TestMethod1()
        {
            Assert.AreEqual(new double[] { 1, 1, 1, 3, 5, 9, 17, 31, 57, 105 }, variabonacci.Tribonacci(new double[] { 1, 1, 1 }, 10));

        }
        [Test]
        public void TestMethod2()
        {
            Assert.AreEqual(new double[] { 0, 0, 1, 1, 2, 4, 7, 13, 24, 44 }, variabonacci.Tribonacci(new double[] { 0, 0, 1 }, 10));
        }
        [Test]
        public void TestMethod3()
        {
            Assert.AreEqual(new double[] { 0, 1, 1, 2, 4, 7, 13, 24, 44, 81 }, variabonacci.Tribonacci(new double[] { 0, 1, 1 }, 10));
        }
        [Test]
        public void TestMethod4()
        {
            Assert.AreEqual(new double[] { 10, 17, 6, 33, 56, 95 }, variabonacci.Tribonacci(new double[] { 10, 17, 6 }, 6));
        }
        [Test]
        public void TestMethod5()
        {
            Assert.AreEqual(new double[] {12, 14}, variabonacci.Tribonacci(new double[] {12, 14, 12}, 2));
        }

        [Test]
        public void TestMethod6()
        {
            Assert.AreEqual(new double[] {12}, variabonacci.Tribonacci(new double[] {12, 14, 12}, 1));
        }

        [Test]
        public void TestMethod7()
        {
            Assert.AreEqual(new double[] {}, variabonacci.Tribonacci(new double[] {12, 14, 12}, 0));
        }
        [Test]
        public void TestMethod8()
        {
            Assert.AreEqual(new double[] {1}, variabonacci.Tribonacci(new double[] { 1, 14, 12 }, 0));
        }
    }

    public class Xbonacci
    {
        public double[] Tribonacci(double[] signature, int n)
        {
            double[] expectArray = new double[n];
            if (n > 3)
            {
                for (int i = 0; i < 3; i++)
                {
                    expectArray[i] = signature[i];
                }
                for (int i = 3; i < n; i++)
                {
                    expectArray[i] = expectArray[i - 1] + expectArray[i - 2] + expectArray[i - 3];
                }
            }
            else
            {
                for (int i = 0; i < n; i++)
                {
                    expectArray[i] = signature[i];
                }
            }
            return expectArray;
        }
    }
}
