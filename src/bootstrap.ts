import { bootstrapModule } from '@onecx/angular-webcomponents'
import { environment } from 'src/environments/environment'
import { OneCXTokenAppModule } from './app/onecx-token-app.remote.module'

bootstrapModule(OneCXTokenAppModule, 'microfrontend', environment.production)
