
from django.db import models

class FlightBooking(models.Model):
    departure_city = models.CharField(max_length=200)
    arrival_city = models.CharField(max_length=200)
    departure_date = models.DateTimeField('')
    arrival_date = models.DateTimeField('')
    passangers = models.IntegerField(default=1)
    type = models.CharField(max_length=200)
    flight_class = models.CharField(max_length=200)
