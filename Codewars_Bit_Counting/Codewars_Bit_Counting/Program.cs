using System;

namespace Codewars_Bit_Counting
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
                Console.WriteLine(string.Format("{0} -> {1}", strNum, cul(Num)));
            }
        }

        public static int cul(int input_actual)
        {
            int CountNum = 0;
            int[] bit = new int[31];

            for (int i = 30; i > 0; i--)
            {
                bit[i] = input_actual % 2;
                input_actual /= 2;
            }
            for (int i = 0; i < 31; i++)
            {
                if (bit[i] == 1)
                {
                    CountNum++;
                }
            }
            return CountNum;
        }
    }
}