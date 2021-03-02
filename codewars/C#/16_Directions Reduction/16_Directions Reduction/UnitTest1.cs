using System;
using System.Linq;
using NUnit.Framework;

namespace _16_Directions_Reduction
{
    public class UnitTest1
    {
        [Test]
        public void Test1()
        {
            string[] a = new string[] { "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
            string[] b = new string[] { "WEST" };
            string[] actual = DirReduction.dirReduc(a);
            Assert.AreEqual(b, actual);
        }
        [Test]
        public void Test2()
        {
            string[] a = new string[] { "NORTH", "WEST", "SOUTH", "EAST" };
            string[] b = new string[] { "NORTH", "WEST", "SOUTH", "EAST" };
            string[] actual = DirReduction.dirReduc(a);
            Assert.AreEqual(b, actual);
        }
    }
    
    public class DirReduction
    {
        public static string[] dirReduc(string[] arr)
        {
            for (int j = 0; j < arr.Length - 1; j++)
            {
                arr = RemoveOpposite(arr, "NORTH", "SOUTH");
                arr = RemoveOpposite(arr, "SOUTH", "NORTH");
                arr = RemoveOpposite(arr, "WEST", "EAST");
                arr = RemoveOpposite(arr, "EAST", "WEST");
            }          
            return arr;
        }

        private static string[] RemoveOpposite(string[] arr,string direction1,string direction2)
        {
            for (int i = 0; i < arr.Length - 1; i++)
            {
                if (arr[i] == direction1 && arr[i + 1] == direction2)
                {
                    arr = arr.Where((source, index) => index != i).ToArray();
                    arr = arr.Where((source, index) => index != i).ToArray();
                }
            }
            return arr;
        }
    }
}
