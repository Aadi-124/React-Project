import java.io.*;
import java.util.*;

public class Sample {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for(int i=0;i<n;i++){
            arr[i] = sc.nextInt();
        }

        int sum = 0;
        int count = 0;
        for(int i=0;i<arr.length;i++){
            for(int k=i;k<arr.length;k++){
                for(int j=i;j<=k;j++){
                    sum+=arr[j]; 
                    System.out.print(arr[j]);
                    if(j != k-1)System.out.print(" + ");               
                }
                System.out.println(" = "+sum);
                if(sum<0)count++;
                sum=0;
            }
        }

        System.out.println(count);

    }
}




