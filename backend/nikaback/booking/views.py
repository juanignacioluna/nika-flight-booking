
from django.http import HttpResponse
from django.shortcuts import render
from booking.models import FlightBooking
from django.http import JsonResponse
from django.core import serializers
from django.views.decorators.csrf import csrf_exempt

def index(request):

    bookingJson = serializers.serialize("json", FlightBooking.objects.all())
    data = {"data": bookingJson}
    return JsonResponse(data)

@csrf_exempt
def new(request):

        departure_city = request.POST.get('dcity', '')
        arrival_city = request.POST.get('acity', '')
        departure_date = request.POST.get('ddate', '0001-01-01 01:00:00.000000-00:00')
        arrival_date = request.POST.get('adate', '0001-01-01 01:00:00.000000-00:00')
        passangers = request.POST.get('passengers', 1)
        ftype = request.POST.get('ftype', '')
        flight_class = request.POST.get('fclass', '')

        booking = FlightBooking(departure_city=departure_city,arrival_city= arrival_city, departure_date=departure_date, arrival_date=arrival_date, passangers=passangers, type=ftype, flight_class=flight_class)

        booking.save()

        return JsonResponse({"data": "ok"})