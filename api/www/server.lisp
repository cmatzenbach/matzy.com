;;; load dependencies
(ql:quickload :hunchentoot)
(ql:quickload :hunchentoot-test)
(ql:quickload :cl-who)

;;; start server
(hunchentoot:start (make-instance 'hunchentoot:easy-acceptor :port 4242))
(asdf:oos 'asdf:load-op :hunchentoot-test)

;;; global vars
(defvar *page-views* 0)

;;; first ever route!
(hunchentoot:define-easy-handler (say-yo :uri "/yo") (name)
  (setf (hunchentoot:content-type*) "text/plain")
  (format nil "Hey~@[ ~A~]!" name))

;;; route to store page views
(hunchentoot:define-easy-handler (views :uri "/store_page_view") ()
  (setf (hunchentoot:content-type*) "text/plain")
  ;; for now, print out that page is viewed, later store in database
  (+ *page-views* 1)
  (format t "~d" *page-views))
