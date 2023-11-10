import * as bcryptjs from 'bcryptjs'

export class Hash {
	static genericHash(plainText: string) {
		return bcryptjs.hashSync(plainText, 10)
	}

	static compare(plainText: string, hash: string) {
		return bcryptjs.compareSync(plainText, hash)
	}
}
