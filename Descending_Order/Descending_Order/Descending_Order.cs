using System;
using System.Linq;

namespace Descending_Order
{
    class Descending_Order
    {
        static void Main(string[] args)
        {
            while (true)
            {
                string strNum = string.Empty;
                int Num = 0;
                do
                {
                    Console.Write("Please Enter the Number : ");
                    strNum = Console.ReadLine();
                } while (!Int32.TryParse(strNum, out Num));
                Console.WriteLine(string.Format("{0} -> {1}", strNum, DescendingOrder(Num)));
            }
        }

        public static long DescendingOrder(long actual_Input)
        {
            long AfterSortLong = 0;
            string AfterSortString = "";
            int[] arrayList = actual_Input.ToString().Select(o => Convert.ToInt32(o - 48)).ToArray();
            Array.Sort(arrayList);
            Array.Reverse(arrayList);
            for (int i = 0; i < arrayList.Length; i++)
            {
                AfterSortString += arrayList[i].ToString();
            }
            AfterSortLong = Convert.ToInt64(AfterSortString);
            return AfterSortLong;
        }
    }

}