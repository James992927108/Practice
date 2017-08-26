using NUnit.Framework;
using System;
using System.Linq;

namespace _Merged_String_Checker
{
	[TestFixture]
	public class StringMergerTests
	{
		[Test]
		public void HappyPath1()
		{
			Assert.IsTrue(StringMerger.isMerge("codewars", "code", "wars"), "codewars can be created from code and wars");
		}

		[Test]
		public void HappyPath2()
		{
			Assert.IsTrue(StringMerger.isMerge("codewars", "cdwr", "oeas"), "codewars can be created from cdwr and oeas");
		}

		[Test]
		public void SadPath1()
		{
			Assert.IsFalse(StringMerger.isMerge("codewars", "cod", "wars"), "Codewars are not codwars");
		}
	public class StringMerger
	{
		public static bool isMerge(String s, String part1, String part2) {
			if (part1 == part2 & s!="") return false;

			string[] get_s_element = s.Select(o => o.ToString()).ToArray();
			string[] get_part1_element = part1.Select(o => o.ToString()).ToArray();
			string[] get_part2_element = part2.Select(o => o.ToString()).ToArray();

			int l = get_s_element.Length, l1 = get_part1_element.Length, l2 = get_part2_element.Length;
			int n = 0, m = 0;
			if (l == (l1 + l2)) {
				for (int i = 0; i < l; i++) {
					if (n < l1 && get_s_element[i] == get_part1_element[n]) n++;
					if (m < l2 && get_s_element[i] == get_part2_element[m]) m++;
				}
				if (l == n + m) {
					return true;
				} else return false;

			} else return false;
		}
	}
	
}


