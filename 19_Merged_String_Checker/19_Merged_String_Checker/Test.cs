using NUnit.Framework;
using System;
namespace _Merged_String_Checker
{
	[TestFixture]
	public class StringMergerTestsㄇ
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
	}
	public class StringMerger
	{
		public static bool isMerge(string s, string part1, string part2)
		{
			return false;
		}
	}
	
}


