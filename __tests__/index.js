const Bus = require('index.js')

const mockMiddleware = {
  handleIncoming: jest.fn(),
  handleOutgoing: jest.fn()
}

describe('Bus', () => {

  describe('constructor', () => {
    it('is a class with important APIs checked', () => {
      expect(Bus).toBeDefined()

      let bus = new Bus()

      expect(bus).toBeDefined()
      expect(bus.on).toBeDefined()
      expect(bus.use).toBeDefined()
      expect(bus.handleIncoming).toBeDefined()
      expect(bus.handleOutgoing).toBeDefined()
    })
  })

  describe('middleware', () => {

    it('#use adds middleware', () => {
      let bus = new Bus()
      bus.use(mockMiddleware)
  
      expect(bus.incomingMiddleware).toContain(mockMiddleware.handleIncoming)
      expect(bus.outgoingMiddleware).toContain(mockMiddleware.handleOutgoing)

      bus.handleIncoming(null, {}, {})
      expect(mockMiddleware.handleIncoming).toBeCalled()
      
      bus.handleOutgoing(null, {}, {})
      expect(mockMiddleware.handleOutgoing).toBeCalled()
    })
  })
})