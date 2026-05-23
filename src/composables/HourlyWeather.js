import { ref } from 'vue'

export function HourlyWeather() {
  let hour = ref(null)
  let hloading = ref(false)
  let herror = ref(null)

  const fetchHours = async () => {
    hloading.value = true
    herror.value = null

    try {
      let hourly = await fetch(
        'https://api.open-meteo.com/v1/forecast?hourly=temperature_2m,precipitation&latitude=53.43&longitude=14.55&forecast_days=1&timezone=Europe%2FBerlin',
      )

      if (!hourly.ok) {
        throw new Error('error here <--')
      }

      let json = await hourly.json()

      hour.value = json.hourly
    } catch (err) {
      herror.value = err
    } finally {
      hloading.value = false
    }
  }

  return {
    hour,
    hloading,
    herror,
    fetchHours,
  }
}
