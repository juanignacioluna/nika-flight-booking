# Generated by Django 4.0.3 on 2022-03-27 05:06

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='FlightBooking',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('departure_city', models.CharField(max_length=200)),
                ('arrival_city', models.CharField(max_length=200)),
                ('departure_date', models.DateTimeField(verbose_name='')),
                ('arrival_date', models.DateTimeField(verbose_name='')),
                ('passangers', models.IntegerField(default=1)),
                ('type', models.CharField(max_length=200)),
                ('flight_class', models.CharField(max_length=200)),
            ],
        ),
    ]
