(ql:quickload :hunchentoot)
(ql:quickload :easy-routes)

(defvar *my-own-server* (make-instance 'easy-routes:easy-routes-acceptor :port 4444))
(hunchentoot:start *my-own-server*)

(easy-routes:defroute hey-name ("/hey/:a" :method :get) ()
  (setf (hunchentoot:content-type*) "text/plain")
  (format nil "Hey~@[ ~A~]!" a))

(easy-routes:defroute yo ("/yo") ()
  (format nil "Yo!"))

(easy-routes:defroute fooroute ("/foo/:x" :method :get) (y &get z)
  (setf (hunchentoot:content-type*) "text/plain")
  (format nil "x: ~a y: ~a z: ~a" x y z))

(easy-routes:defroute int-test "/faa/:x"
    ((y :real-name "Y" :init-form 22 :parameter-type 'integer))
  (format nil "~A - ~A" x y))
