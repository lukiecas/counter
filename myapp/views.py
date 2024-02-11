from django.shortcuts import render
from django.http import JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt
from myapp.models import Member
# Create your views here.
def home(request):
    return render(request, "index.html")
def count(request):
    if request.method == 'GET':
        data = {'message': 'Hello from Django!'}
        return JsonResponse(data)
@csrf_exempt
def update_member(request):
    if request.method == 'POST':
        try:
            
            data = json.loads(request.body)
            print(data)
            p_id = data['p_id']

            amount = data['amount']
            print(p_id)
            print(amount)
            member = Member.objects.get(id=p_id)
            member.count = member.count + amount
            member.save()
            return JsonResponse({'message': 'Blog post modified successfully'})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)
def get_data(request):
    data = list(Member.objects.values())
    return JsonResponse(data, safe=False)
