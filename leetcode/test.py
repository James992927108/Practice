def solution(matrix):
    base_D = matrix[0][0]*matrix[1][1]*matrix[2][2] + matrix[1][0]*matrix[2][1]*matrix[0][2] + matrix[2][0]*matrix[0][1]*matrix[1][2]
     
    base_D = base_D-(matrix[0][2]*matrix[1][1]*matrix[2][0] + matrix[0][0]*matrix[1][2]*matrix[2][1] + matrix[0][1]*matrix[1][0]*matrix[2][2])
    
    if(base_D != 0):
        x_D = matrix[0][3]*matrix[1][1]*matrix[2][2] + matrix[1][3]*matrix[2][1]*matrix[0][2] + matrix[2][3]*matrix[0][1]*matrix[1][2]
        x_D = x_D-(matrix[0][2]*matrix[1][1]*matrix[2][3] + matrix[0][3]*matrix[1][2]*matrix[2][1] + matrix[0][1]*matrix[1][3]*matrix[2][2])
        
        y_D = matrix[0][0]*matrix[1][3]*matrix[2][2] + matrix[1][0]*matrix[2][3]*matrix[0][2] + matrix[2][0]*matrix[0][3]*matrix[1][2]
        y_D = y_D-(matrix[0][2]*matrix[1][3]*matrix[2][0] + matrix[0][0]*matrix[1][2]*matrix[2][3] + matrix[0][3]*matrix[1][0]*matrix[2][2])
        
        z_D = matrix[0][0]*matrix[1][1]*matrix[2][3] + matrix[1][0]*matrix[2][1]*matrix[0][3] + matrix[2][0]*matrix[0][1]*matrix[1][3]
        z_D = z_D-(matrix[0][3]*matrix[1][1]*matrix[2][0] + matrix[0][0]*matrix[1][3]*matrix[2][1] + matrix[0][1]*matrix[1][0]*matrix[2][3])
        
        x =  x_D/base_D
        y =  y_D/base_D
        z =  z_D/base_D
        return x, y, z
    else:
        return 0
    
if __name__ == '__main__':
    N = [[1,2,-1,2],[2,1,3,13],[3,-1,2,7]]

    result = solution(N)
    print(result)