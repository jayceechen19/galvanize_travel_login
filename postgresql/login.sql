--
-- PostgreSQL database dump
--

-- Dumped from database version 12.3
-- Dumped by pg_dump version 12.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: pgcrypto; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;


--
-- Name: EXTENSION pgcrypto; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: users; Type: TABLE; Schema: public; Owner: jessicachen
--

CREATE TABLE public.users (
    username character varying(100) NOT NULL,
    password character varying(225) NOT NULL
);

--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: jessicachen
--

COPY users (username, password) FROM stdin;
username	$1$rP64VIc/$noQOYXufRFSOg6lTWhkLM0
jesschen2	$1$ucuILS6X$6nlamzkyVlyvYcgxgj5RE/
jacob	$1$Jvp/feHZ$KAZiv0lUthlOq5YuK/kac.
\.


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: jessicachen
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (username);


--
-- PostgreSQL database dump complete
--

