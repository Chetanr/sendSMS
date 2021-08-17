#This function is used to get the data from the smsHistory Table

import boto3
from botocore.exceptions import ClientError

#initialize the dynamodb boto3 resource
dynamodb = boto3.resource('dynamodb')

def lambda_handler(event, context):
    
    #'smsHistory table'
    table = dynamodb.Table('smsHistory')
    
    #scan the table for all the entries
    #If there is an error, exception is thrown. Else, the response from the scan() function is returned
    try:
        response = table.scan()
    except ClientError as e:
        print(e.response['Error']['Message'])
    else:
        return response
                
    return False
