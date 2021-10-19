from django.contrib import admin
from treebeard.admin import TreeAdmin
from treebeard.forms import movenodeform_factory

### Register and setup models ###

from .models import Activity


class ActivityAdmin(admin.ModelAdmin):
    list_display = ("type", "places", "start", "end")

    def places(self, obj):
        return "\n".join([l.name_eng for l in obj.associatedPlace.all()])

    def start(self, obj):
        return "\n".join([p.name_eng for p in obj.startPeriod.all()])

    def end(self, obj):
        return "\n".join([p.name_eng for p in obj.endPeriod.all()])


admin.site.register(Activity, ActivityAdmin)


from .models import Period


class PeriodAdmin(TreeAdmin):
    form = movenodeform_factory(Period)


admin.site.register(Period, PeriodAdmin)

from .models import Place


class PlaceAdmin(TreeAdmin):
    form = movenodeform_factory(Place)


admin.site.register(Place, PlaceAdmin)
