$galleryDir = "src/assets/images/gallery"
if (!(Test-Path $galleryDir)) {
    New-Item -ItemType Directory -Path $galleryDir -Force
}

$urls = @{
    "gallery-room-1.jpg"      = "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"
    "gallery-valleys-1.jpg"   = "https://images.unsplash.com/photo-1508873696983-2df519f0397e?auto=format&fit=crop&w=800&q=80"
    "gallery-waterfall-1.jpg" = "https://images.unsplash.com/photo-1432406186267-3c7498b411d8?auto=format&fit=crop&w=800&q=80"
    "gallery-dining-1.jpg"    = "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80"
    "gallery-campfire-1.jpg"  = "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80"
    "gallery-exterior-1.jpg"  = "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80"
}

$fallbacks = @{
    "gallery-room-1.jpg"      = "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
    "gallery-valleys-1.jpg"   = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    "gallery-waterfall-1.jpg" = "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80"
    "gallery-dining-1.jpg"    = "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=800&q=80"
    "gallery-campfire-1.jpg"  = "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80"
    "gallery-exterior-1.jpg"  = "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80"
}

$userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"

foreach ($filename in $urls.Keys) {
    $dest = Join-Path $galleryDir $filename
    Write-Host "Downloading $filename..."
    try {
        Invoke-WebRequest -Uri $urls[$filename] -OutFile $dest -UserAgent $userAgent -ErrorAction Stop
    } catch {
        Write-Host "Error downloading $filename, trying fallback..."
        Invoke-WebRequest -Uri $fallbacks[$filename] -OutFile $dest -UserAgent $userAgent
    }
}
Write-Host "Done!"
