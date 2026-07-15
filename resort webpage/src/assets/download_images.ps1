$downloads = @(
    @{
        Url = "https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&q=80&w=1920"
        Path = "src/assets/images/hero/hero-valleys.jpg"
    },
    @{
        Url = "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1920"
        Path = "src/assets/images/hero/hero-room.jpg"
    },
    @{
        Url = "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1920"
        Path = "src/assets/images/hero/hero-pool.jpg"
    },
    @{
        Url = "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800"
        Path = "src/assets/images/about/about-exterior.jpg"
    },
    @{
        Url = "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=800"
        Path = "src/assets/images/about/about-trail.jpg"
    },
    @{
        Url = "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=800"
        Path = "src/assets/images/rooms/woodland-suite.jpg"
    },
    @{
        Url = "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?auto=format&fit=crop&q=80&w=800"
        Path = "src/assets/images/rooms/treehouse-cabin.jpg"
    },
    @{
        Url = "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800"
        Path = "src/assets/images/rooms/pool-sanctuary.jpg"
    },
    @{
        Url = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800"
        Path = "src/assets/images/experiences/sunrise-trek.jpg"
    },
    @{
        Url = "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800"
        Path = "src/assets/images/experiences/misty-waterfall.jpg"
    },
    @{
        Url = "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800"
        Path = "src/assets/images/experiences/spa-healing.jpg"
    },
    @{
        Url = "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800"
        Path = "src/assets/images/dining/cardamom-breakfast.jpg"
    },
    @{
        Url = "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&q=80&w=800"
        Path = "src/assets/images/dining/banana-leaf-sadya.jpg"
    },
    @{
        Url = "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&q=80&w=800"
        Path = "src/assets/images/dining/log-fire-bbq.jpg"
    },
    @{
        Url = "https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&q=80&w=800"
        Path = "src/assets/images/gallery/gallery-room-1.jpg"
    },
    @{
        Url = "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=800"
        Path = "src/assets/images/gallery/gallery-valleys-1.jpg"
    },
    @{
        Url = "https://images.unsplash.com/photo-1601999109332-542b18dbec57?auto=format&fit=crop&q=80&w=800"
        Path = "src/assets/images/gallery/gallery-waterfall-1.jpg"
    },
    @{
        Url = "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800"
        Path = "src/assets/images/gallery/gallery-dining-1.jpg"
    },
    @{
        Url = "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=800"
        Path = "src/assets/images/gallery/gallery-campfire-1.jpg"
    },
    @{
        Url = "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800"
        Path = "src/assets/images/gallery/gallery-exterior-1.jpg"
    },
    @{
        Url = "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800"
        Path = "src/assets/images/contact/map-backdrop.jpg"
    }
)

$userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"

foreach ($item in $downloads) {
    Write-Host "Downloading $($item.Path)..."
    Invoke-WebRequest -Uri $item.Url -OutFile $item.Path -UserAgent $userAgent
}

Write-Host "All downloads complete!"
