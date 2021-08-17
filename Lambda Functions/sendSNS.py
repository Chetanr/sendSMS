import boto3
from datetime import datetime
from botocore.exceptions import ClientError


region = "us-east-1"

#initialize the dynamodb boto3 resource
dynamodb = boto3.resource('dynamodb',  region_name=region)

#initialize the pinpoint boto3 client
client = boto3.client('pinpoint', region_name=region)


def lambda_handler(event, context):
    
    #read the phone number and the message passed by the application as query string parameters
    destinationNumber = event['params']['querystring']["phone"]
    message = event['params']['querystring']["message"]
    
    #project id of pinpoint project
    applicationId = "e20e5185bab64148b4a45385a93e4f25"
    
    #Transactional Message type
    messageType = "TRANSACTIONAL"
    
    #send the message using the amazon pinpoint service.
    #If there is an issue sending the sms, an exception is returned
    try:
        response = client.send_messages(
            ApplicationId=applicationId,
            MessageRequest={
                'Addresses': {
                    destinationNumber: {
                        'ChannelType': 'SMS'
                    }
                },
                'MessageConfiguration': {
                    'SMSMessage': {
                        'Body': message,
                        'MessageType': messageType,
                    }
                }
            }
        )

    except ClientError as e:
        return e.response['Error']['Message']
    
    
    #store the details into DynamoDb table 'smsHistory'
    table = dynamodb.Table('smsHistory')
    count =  table.scan()['Count']
    status = response['MessageResponse']['Result'][destinationNumber]['DeliveryStatus']
    date = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
    

    response = table.put_item(
        Item = {
            'publish_number' : (count + 1),
            'phone_number': destinationNumber,
            'message' : message,
            'status': status,
            'date' : date
        }
    )
    
    #return the status of the message (SUCCESSFUL or PERMANENT_FAILURE)
    return status