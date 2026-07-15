$serviceDir = "src/assets/images/services"
if (!(Test-Path $serviceDir)) {
    New-Item -ItemType Directory -Path $serviceDir -Force
}

$urls = @{
    "service-campfire.jpg" = "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80"
    "service-cuisine.jpg"  = "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80"
    "service-tea-tour.jpg" = "https://images.unsplash.com/photo-1563889362-5819e2193065?auto=format&fit=crop&w=800&q=80"
    "service-guide.jpg"    = "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=800&q=80"
    "service-parking.jpg"  = "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=800&q=80"
    "service-wifi.jpg"     = "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
    "service-room-service.jpg" = "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
    "service-kitchenette.jpg"  = "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80"
}

foreach ($filename in $urls.Keys) {
    $dest = Join-Path $serviceDir $filename
    Write-Host "Downloading $filename..."
    try {
        Invoke-WebRequest -Uri $urls[$filename] -OutFile $dest -ErrorAction Stop
    } catch {
        Write-Host "Error downloading $filename, trying fallback..."
        # Fallback to an general high quality nature id
        Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=800&q=80" -OutFile $dest
    }
}
Write-Host "Done!"
