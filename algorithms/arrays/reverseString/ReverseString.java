package algorithms.arrays.reverseString;

public class ReverseString {

    public static String reverseString(String string) {
        String result = "";
        final int length = string.length();
        for (int i = length - 1; i >= 0; i--) {
            result += string.charAt(i);
        }
        return result;
    }

    public static String ReverseStringWithReelJava(String string) {
        return new StringBuilder(string).reverse().toString();
    }

    public static void main(String[] args) {
        System.out.println(reverseString("Hello world"));
        System.out.println(ReverseStringWithReelJava("123456"));
    }
}