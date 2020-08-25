#!/usr/bin/python2.7

import sys

global dOut

def sendResult(dOut):
	print(dOut)
	sys.stdout.flush()

def main():
    try:
        montoActual = float(sys.argv[1])
        montoMovimiento = float(sys.argv[2])
        newBalance = montoActual + montoMovimiento
        data = newBalance
        sendResult(data)
    
    except Exception as ex:
        sendResult("Error")

main()