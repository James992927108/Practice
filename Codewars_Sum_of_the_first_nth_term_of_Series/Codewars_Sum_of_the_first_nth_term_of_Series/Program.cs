using System;

namespace Codewars_Sum_of_the_first_nth_term_of_Series
{
    class Program
    {
        static void Main(string[] args)
        {
            while (true)
            {
                //Check whether the Number
                string strNum = string.Empty;
                int Num = 0;
                do
                {
                    Console.Write("Please Enter the Number : ");
                    strNum = Console.ReadLine();
                } while (!Int32.TryParse(strNum, out Num));
                // 1 + 2 + 3 + ... + n
                Console.WriteLine(string.Format("Sum({0}) = {1}", strNum, SumtoString(Num)));
            }
        }
        public static string SumtoString(float n)
        {
            var a = RoundSum(n);
            return a.ToString("f2");
        }
        public static Double RoundSum(float n)
        {
            var a = Math.Round(Sum(n), 2);
            return a;
        }
        public static Double Sum(float n)
        {
            if (n == 0)
            {
                return n;
            }
            float a = 1 / (1 + (n - 1) * 3);
            return Sum(n - 1) + a;
        }
    }
}