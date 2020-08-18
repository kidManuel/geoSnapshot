## geoSnapshot

### Fetch geolocated photos from Flickr, and see them on a map!

This is a toy/sandbox/exercise repository meant for me to try new things with tech I want to learn.

#### Building

You'll have to provide a valid .env file to the root directorty to boot. Gotta protect your API keys.

Other than that, `yarn i` and `yarn start` should just work.

#### App flow

User onboarding still has a ways to go.
Search for any term. You can click on any amount of them and they will be marked as selected with a green border. 
Clicking on the expand map button to the right brings up the Google Maps integration, with the selected photos located using the geo data.
You can click on markers to see more info on the map.

#### Major TODOs:

- Comprehensive Mobile styles. 1920x1080 is recommended for now, but it will manage with most modern resolutions.
- Own React Google Map component, or make a few PRs to the one I'm consuming.
- Testing
- CI/CD? Maybe a full deploy?
- More animations
- The already mentioned user onboarding.
