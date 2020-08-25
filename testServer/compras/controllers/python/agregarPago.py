#!/usr/bin/python2.7

import sys


def sendResult(dOut):
	print(dOut)
	sys.stdout.flush()

def main():
	try:
	
	    montoPendiente = sys.argv[1]
	    montoPagado = sys.argv[2]
	    montoMovimiento = sys.argv[3]
		newPendiente = montoPendiente - montoMovimiento
		newPagado = montoPagado + montoMovimiento

        data = {
            montoPendiente: newPendiente,
            montoPagado: newPagado,
        }

		sendResult(data)

	except Exception as ex:

		sendResult("Error")

main()