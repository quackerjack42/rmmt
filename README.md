# Developer Doko

## Deployment:
1. Lokal Committen
2. Push auf Remote
3. npm run-script deploy im lokalen Repository ausführen (Pushed Remote Commit auf Server und started index.js)

## SSH
ssh -i "~/.ssh/testKey.pem" ubuntu@ec2-18-195-150-108.eu-central-1.compute.amazonaws.com

## Übersicht der laufenden Prozesse

### Einfache Auflistung
> pm2 ls

### Ausführliche Übersicht
> pm2 monit 