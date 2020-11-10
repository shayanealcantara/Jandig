class ScreenshotCreateSerializer(ModelSerializer):
   class Meta:
         model = Screenshot
         fields = [
            'screenshot'
         ]