import { Controller, Get } from '@nestjs/common'
import { appConfig } from 'src/config'

@Controller(`${appConfig.BASE_URL}/demo`)
export class DemoController {
	@Get()
	getDemo() {
		return {
			statusCode: 200,
			message: 'Success',
		}
	}
}
