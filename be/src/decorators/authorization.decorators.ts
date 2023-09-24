import { SetMetadata, UseGuards, applyDecorators } from '@nestjs/common'
import { actionEnum } from 'src/entities/Permission'
import { AuthGuard } from 'src/guard/auth.guard'
import { RolesGuard } from 'src/guard/role.guard'

export function Authorization(subject: string, action: actionEnum) {
    return applyDecorators(
        SetMetadata('subject', subject),
        SetMetadata('action', action),
        UseGuards(AuthGuard, RolesGuard)
    )
}
