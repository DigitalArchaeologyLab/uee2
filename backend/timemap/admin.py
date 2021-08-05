from django.contrib import admin
from treebeard.admin import TreeAdmin
from treebeard.forms import movenodeform_factory

### Register and setup models ###

from .models import Activity

admin.site.register(Activity)

from .models import Period


class PeriodAdmin(TreeAdmin):
    form = movenodeform_factory(Period)


admin.site.register(Period, PeriodAdmin)

from .models import Location


class LocationAdmin(TreeAdmin):
    form = movenodeform_factory(Location)


admin.site.register(Location, LocationAdmin)
